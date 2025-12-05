-- Create table for storing generated code snippets
CREATE TABLE public.code_snippets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  feature_type TEXT NOT NULL,
  category TEXT NOT NULL,
  code TEXT NOT NULL,
  customization TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.code_snippets ENABLE ROW LEVEL SECURITY;

-- Users can view their own snippets
CREATE POLICY "Users can view their own snippets"
ON public.code_snippets
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own snippets
CREATE POLICY "Users can insert their own snippets"
ON public.code_snippets
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can delete their own snippets
CREATE POLICY "Users can delete their own snippets"
ON public.code_snippets
FOR DELETE
USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_code_snippets_user_id ON public.code_snippets(user_id);
CREATE INDEX idx_code_snippets_created_at ON public.code_snippets(created_at DESC);