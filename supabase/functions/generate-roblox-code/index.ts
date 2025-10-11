import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { featureType, description, customization } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `You are an expert Roblox/Luau code generator specialized in creating complete, production-ready game systems. 
Generate complete, functional Lua/Luau code for Roblox Studio that can be directly used in a game.

IMPORTANT REQUIREMENTS:
1. Generate COMPLETE, WORKING code - not examples or templates
2. Include ALL necessary scripts (LocalScript, ServerScript, ModuleScript)
3. Add proper comments explaining how to integrate into Roblox Studio
4. Use modern Roblox APIs and best practices
5. Include proper error handling and validation
6. Structure code for easy integration (clear file names, placement instructions)
7. Add ReplicatedStorage, ServerScriptService, and StarterPlayer structure as needed

For Seedling Stories game context:
- Focus on farming/gardening mechanics
- Include social features where applicable
- Optimize for mobile-friendly controls
- Use clean, maintainable code structure
- Include UI components with proper sizing for mobile

Return the code in a structured format with:
- File name and location (e.g., "ServerScriptService/PlantingSystem")
- Complete code content
- Integration instructions`;

    const userPrompt = `Generate a complete ${featureType} system for a Roblox game with the following requirements:

Description: ${description}

${customization ? `Additional customization: ${customization}` : ''}

Provide complete, production-ready Lua/Luau code that can be directly copied into Roblox Studio.
Structure the response with clear sections for each script file needed.`;

    console.log('Generating code for:', featureType);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Payment required. Please add credits to your workspace.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error('Failed to generate code');
    }

    const data = await response.json();
    const generatedCode = data.choices[0].message.content;

    console.log('Code generation successful');

    return new Response(JSON.stringify({ code: generatedCode }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-roblox-code:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});