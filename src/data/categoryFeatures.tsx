import { 
  Sprout, Users, Coins, Sparkles, Package, Settings,
  Crosshair, Target, Zap, Shield, Skull, Radio,
  Car, Flag, MapPin, Trophy, Gauge, Wrench,
  Globe, MessageSquare, Swords, Users2, Crown, Building,
  BookOpen, Briefcase, Map, Heart, Star, Award,
  Factory, Trees, Home, Hammer, Mountain, Layers,
  Ghost, Flame, Eye, Brain, Volume2, Moon,
  Castle, Bomb, Grid3x3, Timer, Waves, Siren,
  CloudOff, Crosshair as Scope, Backpack, Circle, Activity, Wind,
  Footprints, Beer, Dumbbell, Medal, AlertCircle, Goal,
  Compass, Key, Scroll, Sword, Gem, Lock,
  Gamepad2, ArrowUp, Box, Percent, Rocket,
  TreePine, Fish, Axe, Tent, CloudRain, Sun,
  Brain as Strategy, ChevronRight, BarChart, Users as Army, MapPinned, Wand2
} from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  type: string;
  ideal?: boolean;
}

export interface CategoryData {
  name: string;
  description: string;
  icon: React.ReactNode;
  features: Feature[];
}

export const categoryFeatures: Record<string, CategoryData> = {
  farming: {
    name: "Farming & Gardening",
    description: "Complete farming simulation systems with realistic mechanics",
    icon: <Sprout className="w-8 h-8" />,
    features: [
      {
        title: "Planting System",
        description: "Complete farming mechanics with seed planting, growth timers, and harvest rewards",
        icon: <Sprout className="w-6 h-6" />,
        category: "Core",
        type: "Planting System",
        ideal: true
      },
      {
        title: "Social Gardens",
        description: "Friend visiting system with helping mechanics and shared effort rewards",
        icon: <Users className="w-6 h-6" />,
        category: "Social",
        type: "Social Gardens",
        ideal: true
      },
      {
        title: "Garden Shop",
        description: "In-game marketplace with seeds, tools, and decorations",
        icon: <Package className="w-6 h-6" />,
        category: "Economy",
        type: "Garden Shop"
      },
      {
        title: "Mutation System",
        description: "Rare plant mutations when specific crops are planted adjacent",
        icon: <Sparkles className="w-6 h-6" />,
        category: "Advanced",
        type: "Mutation System",
        ideal: true
      },
      {
        title: "Currency System",
        description: "Complete economy with coins, transactions, and rewards",
        icon: <Coins className="w-6 h-6" />,
        category: "Economy",
        type: "Currency System"
      },
      {
        title: "Tool Mastery",
        description: "Tool durability, upgrades, and quality tiers system",
        icon: <Settings className="w-6 h-6" />,
        category: "Progression",
        type: "Tool Mastery"
      },
      {
        title: "Seasonal Crops",
        description: "Time-based seasonal planting with unique crop varieties",
        icon: <Sun className="w-6 h-6" />,
        category: "Advanced",
        type: "Seasonal Crops",
        ideal: true
      },
      {
        title: "Animal Husbandry",
        description: "Livestock raising with feeding, breeding, and product collection",
        icon: <Heart className="w-6 h-6" />,
        category: "Core",
        type: "Animal Husbandry"
      },
      {
        title: "Irrigation System",
        description: "Water management with sprinklers and automated watering",
        icon: <Waves className="w-6 h-6" />,
        category: "Automation",
        type: "Irrigation System"
      },
      {
        title: "Greenhouse Building",
        description: "Climate-controlled structures for year-round farming",
        icon: <Home className="w-6 h-6" />,
        category: "Building",
        type: "Greenhouse Building"
      }
    ]
  },
  fps: {
    name: "First-Person Shooter",
    description: "Combat systems and shooter mechanics for FPS games",
    icon: <Crosshair className="w-8 h-8" />,
    features: [
      {
        title: "Weapon System",
        description: "Complete gun mechanics with recoil, ammo, and weapon switching",
        icon: <Crosshair className="w-6 h-6" />,
        category: "Combat",
        type: "Weapon System",
        ideal: true
      },
      {
        title: "Hit Detection",
        description: "Precise raycast-based hit detection with damage calculation",
        icon: <Target className="w-6 h-6" />,
        category: "Combat",
        type: "Hit Detection",
        ideal: true
      },
      {
        title: "Killstreak Rewards",
        description: "Progressive reward system for consecutive eliminations",
        icon: <Zap className="w-6 h-6" />,
        category: "Progression",
        type: "Killstreak Rewards",
        ideal: true
      },
      {
        title: "Armor & Health",
        description: "Player health management with armor and healing mechanics",
        icon: <Shield className="w-6 h-6" />,
        category: "Player Stats",
        type: "Armor & Health"
      },
      {
        title: "Kill Feed",
        description: "Real-time combat feed showing eliminations and events",
        icon: <Skull className="w-6 h-6" />,
        category: "UI",
        type: "Kill Feed"
      },
      {
        title: "Team Communication",
        description: "Voice chat and quick communication system for teams",
        icon: <Radio className="w-6 h-6" />,
        category: "Social",
        type: "Team Communication"
      },
      {
        title: "Loadout System",
        description: "Customizable weapon and equipment loadouts before matches",
        icon: <Package className="w-6 h-6" />,
        category: "Customization",
        type: "Loadout System",
        ideal: true
      },
      {
        title: "Grenade Physics",
        description: "Throwable explosives with realistic trajectory and splash damage",
        icon: <Bomb className="w-6 h-6" />,
        category: "Combat",
        type: "Grenade Physics"
      },
      {
        title: "Scope & Aim System",
        description: "ADS mechanics with zoom levels and accuracy modifiers",
        icon: <Scope className="w-6 h-6" />,
        category: "Combat",
        type: "Scope & Aim System"
      },
      {
        title: "Movement Mechanics",
        description: "Advanced movement with sliding, climbing, and mantling",
        icon: <Activity className="w-6 h-6" />,
        category: "Player Mechanics",
        type: "Movement Mechanics"
      }
    ]
  },
  racing: {
    name: "Racing Games",
    description: "Vehicle physics and racing mechanics for competitive gameplay",
    icon: <Car className="w-8 h-8" />,
    features: [
      {
        title: "Vehicle Physics",
        description: "Realistic car handling with acceleration, drift, and collision physics",
        icon: <Car className="w-6 h-6" />,
        category: "Core",
        type: "Vehicle Physics",
        ideal: true
      },
      {
        title: "Race Tracks",
        description: "Track system with checkpoints, lap counting, and time trials",
        icon: <Flag className="w-6 h-6" />,
        category: "Core",
        type: "Race Tracks",
        ideal: true
      },
      {
        title: "Boost & Power-ups",
        description: "Speed boosts and racing power-ups scattered across tracks",
        icon: <Zap className="w-6 h-6" />,
        category: "Gameplay",
        type: "Boost & Power-ups"
      },
      {
        title: "Vehicle Customization",
        description: "Paint, decals, and performance upgrades for vehicles",
        icon: <Wrench className="w-6 h-6" />,
        category: "Customization",
        type: "Vehicle Customization",
        ideal: true
      },
      {
        title: "Leaderboards",
        description: "Global and track-specific time trial leaderboards",
        icon: <Trophy className="w-6 h-6" />,
        category: "Progression",
        type: "Leaderboards"
      },
      {
        title: "Nitro System",
        description: "Collectible nitro boost with gauge and effects",
        icon: <Gauge className="w-6 h-6" />,
        category: "Gameplay",
        type: "Nitro System"
      },
      {
        title: "Multiplayer Lobbies",
        description: "Matchmaking and race hosting with player lobbies",
        icon: <Users className="w-6 h-6" />,
        category: "Social",
        type: "Multiplayer Lobbies"
      },
      {
        title: "Drift Scoring",
        description: "Point-based drifting mechanics with combo multipliers",
        icon: <Activity className="w-6 h-6" />,
        category: "Gameplay",
        type: "Drift Scoring",
        ideal: true
      },
      {
        title: "Vehicle Damage",
        description: "Realistic crash damage affecting performance and visuals",
        icon: <Hammer className="w-6 h-6" />,
        category: "Physics",
        type: "Vehicle Damage"
      },
      {
        title: "Championship Mode",
        description: "Multi-race tournaments with point accumulation",
        icon: <Crown className="w-6 h-6" />,
        category: "Progression",
        type: "Championship Mode"
      }
    ]
  },
  mmo: {
    name: "MMO Systems",
    description: "Massive multiplayer online features and social systems",
    icon: <Globe className="w-8 h-8" />,
    features: [
      {
        title: "Party System",
        description: "Group formation with shared quests and experience",
        icon: <Users2 className="w-6 h-6" />,
        category: "Social",
        type: "Party System",
        ideal: true
      },
      {
        title: "Guild System",
        description: "Player organizations with ranks, perks, and guild halls",
        icon: <Crown className="w-6 h-6" />,
        category: "Social",
        type: "Guild System",
        ideal: true
      },
      {
        title: "World Chat",
        description: "Global and zone-based chat systems with moderation",
        icon: <MessageSquare className="w-6 h-6" />,
        category: "Communication",
        type: "World Chat"
      },
      {
        title: "Raid Bosses",
        description: "Large-scale boss encounters requiring multiple players",
        icon: <Swords className="w-6 h-6" />,
        category: "Combat",
        type: "Raid Bosses",
        ideal: true
      },
      {
        title: "Trading System",
        description: "Secure player-to-player item and currency trading",
        icon: <Building className="w-6 h-6" />,
        category: "Economy",
        type: "Trading System",
        ideal: true
      },
      {
        title: "World Events",
        description: "Server-wide events with global participation and rewards",
        icon: <Globe className="w-6 h-6" />,
        category: "Events",
        type: "World Events"
      },
      {
        title: "Auction House",
        description: "Player marketplace with bidding and buyout systems",
        icon: <Coins className="w-6 h-6" />,
        category: "Economy",
        type: "Auction House"
      },
      {
        title: "Friend System",
        description: "Social connections with online status and whispers",
        icon: <Heart className="w-6 h-6" />,
        category: "Social",
        type: "Friend System"
      },
      {
        title: "Server Instances",
        description: "Dynamic world sharding for optimal player distribution",
        icon: <Layers className="w-6 h-6" />,
        category: "Technical",
        type: "Server Instances",
        ideal: true
      },
      {
        title: "Mount System",
        description: "Collectible mounts with unique speeds and abilities",
        icon: <Footprints className="w-6 h-6" />,
        category: "Progression",
        type: "Mount System"
      }
    ]
  },
  rp: {
    name: "Role-Playing",
    description: "RPG mechanics and character progression systems",
    icon: <BookOpen className="w-8 h-8" />,
    features: [
      {
        title: "Quest System",
        description: "Story-driven and procedural quests with rewards",
        icon: <Map className="w-6 h-6" />,
        category: "Core",
        type: "Quest System",
        ideal: true
      },
      {
        title: "Character Classes",
        description: "Multiple playable classes with unique abilities and skills",
        icon: <Briefcase className="w-6 h-6" />,
        category: "Character",
        type: "Character Classes",
        ideal: true
      },
      {
        title: "Skill Trees",
        description: "Progression system with unlockable abilities and talents",
        icon: <Star className="w-6 h-6" />,
        category: "Progression",
        type: "Skill Trees",
        ideal: true
      },
      {
        title: "Inventory System",
        description: "Equipment management with weight limits and item categories",
        icon: <Package className="w-6 h-6" />,
        category: "Core",
        type: "Inventory System",
        ideal: true
      },
      {
        title: "NPC Dialogue",
        description: "Interactive conversations with branching dialogue options",
        icon: <MessageSquare className="w-6 h-6" />,
        category: "Story",
        type: "NPC Dialogue"
      },
      {
        title: "Achievement System",
        description: "Trackable achievements with titles and cosmetic rewards",
        icon: <Award className="w-6 h-6" />,
        category: "Progression",
        type: "Achievement System"
      },
      {
        title: "Loot System",
        description: "Random loot drops with rarity tiers and item stats",
        icon: <Package className="w-6 h-6" />,
        category: "Core",
        type: "Loot System",
        ideal: true
      },
      {
        title: "Crafting System",
        description: "Recipe-based item creation with gathering and materials",
        icon: <Hammer className="w-6 h-6" />,
        category: "Core",
        type: "Crafting System"
      },
      {
        title: "Status Effects",
        description: "Buffs and debuffs affecting character stats and abilities",
        icon: <Sparkles className="w-6 h-6" />,
        category: "Combat",
        type: "Status Effects"
      },
      {
        title: "Companion System",
        description: "AI companions and pets that assist in combat",
        icon: <Heart className="w-6 h-6" />,
        category: "Gameplay",
        type: "Companion System"
      }
    ]
  },
  simulation: {
    name: "Simulation Games",
    description: "Realistic simulation mechanics for various scenarios",
    icon: <Factory className="w-8 h-8" />,
    features: [
      {
        title: "Resource Management",
        description: "Complex resource gathering, processing, and distribution",
        icon: <Layers className="w-6 h-6" />,
        category: "Core",
        type: "Resource Management",
        ideal: true
      },
      {
        title: "Building System",
        description: "Placement and construction of structures with snapping",
        icon: <Hammer className="w-6 h-6" />,
        category: "Core",
        type: "Building System",
        ideal: true
      },
      {
        title: "Weather System",
        description: "Dynamic weather affecting gameplay and visuals",
        icon: <Mountain className="w-6 h-6" />,
        category: "Environment",
        type: "Weather System"
      },
      {
        title: "Day/Night Cycle",
        description: "Time progression system with lighting and gameplay changes",
        icon: <Trees className="w-6 h-6" />,
        category: "Environment",
        type: "Day/Night Cycle",
        ideal: true
      },
      {
        title: "Economy Simulation",
        description: "Supply and demand economics with market fluctuations",
        icon: <Coins className="w-6 h-6" />,
        category: "Economy",
        type: "Economy Simulation",
        ideal: true
      },
      {
        title: "Property System",
        description: "Land ownership with customizable buildings and upgrades",
        icon: <Home className="w-6 h-6" />,
        category: "Ownership",
        type: "Property System"
      },
      {
        title: "Production Chains",
        description: "Complex manufacturing with raw materials and refinement",
        icon: <Factory className="w-6 h-6" />,
        category: "Economy",
        type: "Production Chains",
        ideal: true
      },
      {
        title: "Traffic System",
        description: "AI-driven vehicle and pedestrian traffic simulation",
        icon: <Car className="w-6 h-6" />,
        category: "Environment",
        type: "Traffic System"
      },
      {
        title: "Power Grid",
        description: "Electricity generation and distribution network management",
        icon: <Zap className="w-6 h-6" />,
        category: "Infrastructure",
        type: "Power Grid"
      },
      {
        title: "Population Management",
        description: "Citizen needs, happiness, and demographic simulation",
        icon: <Users className="w-6 h-6" />,
        category: "Social",
        type: "Population Management"
      }
    ]
  },
  horror: {
    name: "Horror Games",
    description: "Suspenseful horror mechanics and atmospheric systems",
    icon: <Ghost className="w-8 h-8" />,
    features: [
      {
        title: "Sanity System",
        description: "Mental health mechanic affecting vision and gameplay",
        icon: <Brain className="w-6 h-6" />,
        category: "Core",
        type: "Sanity System",
        ideal: true
      },
      {
        title: "Jumpscare Events",
        description: "Scripted and random horror moments with audio cues",
        icon: <Ghost className="w-6 h-6" />,
        category: "Events",
        type: "Jumpscare Events",
        ideal: true
      },
      {
        title: "Flashlight System",
        description: "Limited light source with battery management",
        icon: <Flame className="w-6 h-6" />,
        category: "Equipment",
        type: "Flashlight System",
        ideal: true
      },
      {
        title: "AI Monster",
        description: "Intelligent enemy with patrol and chase behavior",
        icon: <Eye className="w-6 h-6" />,
        category: "AI",
        type: "AI Monster",
        ideal: true
      },
      {
        title: "Sound Detection",
        description: "Noise-based stealth mechanics where monsters hear footsteps",
        icon: <Volume2 className="w-6 h-6" />,
        category: "Stealth",
        type: "Sound Detection"
      },
      {
        title: "Hiding Spots",
        description: "Interactive hiding locations like closets and lockers",
        icon: <Box className="w-6 h-6" />,
        category: "Stealth",
        type: "Hiding Spots"
      },
      {
        title: "Atmospheric Lighting",
        description: "Dynamic shadows and fog for horror ambiance",
        icon: <Moon className="w-6 h-6" />,
        category: "Environment",
        type: "Atmospheric Lighting"
      },
      {
        title: "Puzzle Mechanics",
        description: "Environmental puzzles to progress through areas",
        icon: <Key className="w-6 h-6" />,
        category: "Gameplay",
        type: "Puzzle Mechanics"
      },
      {
        title: "Item Examination",
        description: "Detailed object inspection for clues and lore",
        icon: <Eye className="w-6 h-6" />,
        category: "Interaction",
        type: "Item Examination"
      },
      {
        title: "Chase Sequences",
        description: "High-tension escape scenarios with dynamic camera",
        icon: <Activity className="w-6 h-6" />,
        category: "Events",
        type: "Chase Sequences"
      }
    ]
  },
  towerdefense: {
    name: "Tower Defense",
    description: "Strategic tower placement and wave-based defense systems",
    icon: <Castle className="w-8 h-8" />,
    features: [
      {
        title: "Tower Placement",
        description: "Grid-based tower building with range indicators",
        icon: <Castle className="w-6 h-6" />,
        category: "Core",
        type: "Tower Placement",
        ideal: true
      },
      {
        title: "Wave System",
        description: "Progressive enemy waves with increasing difficulty",
        icon: <Waves className="w-6 h-6" />,
        category: "Core",
        type: "Wave System",
        ideal: true
      },
      {
        title: "Tower Upgrades",
        description: "Multi-tier tower enhancement system with branching paths",
        icon: <Star className="w-6 h-6" />,
        category: "Progression",
        type: "Tower Upgrades",
        ideal: true
      },
      {
        title: "Enemy Pathfinding",
        description: "Smart enemy AI that follows optimal routes",
        icon: <MapPinned className="w-6 h-6" />,
        category: "AI",
        type: "Enemy Pathfinding",
        ideal: true
      },
      {
        title: "Special Abilities",
        description: "Active skills like airstrikes and freeze effects",
        icon: <Zap className="w-6 h-6" />,
        category: "Abilities",
        type: "Special Abilities"
      },
      {
        title: "Resource Economy",
        description: "Currency generation and spending management",
        icon: <Coins className="w-6 h-6" />,
        category: "Economy",
        type: "Resource Economy"
      },
      {
        title: "Enemy Types",
        description: "Varied enemy units with unique abilities and resistances",
        icon: <Skull className="w-6 h-6" />,
        category: "Enemies",
        type: "Enemy Types"
      },
      {
        title: "Map Editor",
        description: "Custom map creation tools for community content",
        icon: <Grid3x3 className="w-6 h-6" />,
        category: "Creation",
        type: "Map Editor"
      },
      {
        title: "Co-op Mode",
        description: "Multiplayer tower defense with shared resources",
        icon: <Users className="w-6 h-6" />,
        category: "Multiplayer",
        type: "Co-op Mode"
      },
      {
        title: "Boss Waves",
        description: "Special waves featuring powerful boss enemies",
        icon: <Crown className="w-6 h-6" />,
        category: "Events",
        type: "Boss Waves"
      }
    ]
  },
  battleroyale: {
    name: "Battle Royale",
    description: "Large-scale PvP survival with shrinking zones",
    icon: <CloudOff className="w-8 h-8" />,
    features: [
      {
        title: "Shrinking Zone",
        description: "Dynamic safe zone that forces player encounters",
        icon: <Circle className="w-6 h-6" />,
        category: "Core",
        type: "Shrinking Zone",
        ideal: true
      },
      {
        title: "Parachute Drop",
        description: "Skydiving spawn system with freefall controls",
        icon: <CloudOff className="w-6 h-6" />,
        category: "Core",
        type: "Parachute Drop",
        ideal: true
      },
      {
        title: "Loot Spawns",
        description: "Randomized weapon and item spawn locations",
        icon: <Backpack className="w-6 h-6" />,
        category: "Core",
        type: "Loot Spawns",
        ideal: true
      },
      {
        title: "Squad System",
        description: "Team-based gameplay with revive and ping mechanics",
        icon: <Users className="w-6 h-6" />,
        category: "Social",
        type: "Squad System",
        ideal: true
      },
      {
        title: "Storm Mechanics",
        description: "Damaging zone boundary with warning system",
        icon: <Wind className="w-6 h-6" />,
        category: "Environment",
        type: "Storm Mechanics"
      },
      {
        title: "Supply Drops",
        description: "Aerial supply crates with high-tier loot",
        icon: <Package className="w-6 h-6" />,
        category: "Events",
        type: "Supply Drops"
      },
      {
        title: "Ping System",
        description: "Non-verbal communication for marking locations and items",
        icon: <MapPin className="w-6 h-6" />,
        category: "Communication",
        type: "Ping System"
      },
      {
        title: "Spectator Mode",
        description: "View teammates and killers after elimination",
        icon: <Eye className="w-6 h-6" />,
        category: "UI",
        type: "Spectator Mode"
      },
      {
        title: "Building Mechanics",
        description: "Quick construction of defensive structures",
        icon: <Hammer className="w-6 h-6" />,
        category: "Gameplay",
        type: "Building Mechanics"
      },
      {
        title: "Victory Royale",
        description: "End-game celebration with stats and rewards",
        icon: <Trophy className="w-6 h-6" />,
        category: "Progression",
        type: "Victory Royale"
      }
    ]
  },
  sports: {
    name: "Sports Games",
    description: "Athletic competition systems and team management",
    icon: <Dumbbell className="w-8 h-8" />,
    features: [
      {
        title: "Match System",
        description: "Full game simulation with rules and scoring",
        icon: <Trophy className="w-6 h-6" />,
        category: "Core",
        type: "Match System",
        ideal: true
      },
      {
        title: "Player Stats",
        description: "Detailed attributes affecting performance and gameplay",
        icon: <BarChart className="w-6 h-6" />,
        category: "Core",
        type: "Player Stats",
        ideal: true
      },
      {
        title: "Team Management",
        description: "Roster creation, formations, and strategy customization",
        icon: <Users className="w-6 h-6" />,
        category: "Management",
        type: "Team Management",
        ideal: true
      },
      {
        title: "Career Mode",
        description: "Long-term progression with seasons and championships",
        icon: <Medal className="w-6 h-6" />,
        category: "Progression",
        type: "Career Mode",
        ideal: true
      },
      {
        title: "Training System",
        description: "Skill improvement through practice drills",
        icon: <Dumbbell className="w-6 h-6" />,
        category: "Progression",
        type: "Training System"
      },
      {
        title: "Referee System",
        description: "Rule enforcement with fouls and penalties",
        icon: <AlertCircle className="w-6 h-6" />,
        category: "Rules",
        type: "Referee System"
      },
      {
        title: "Spectator Crowds",
        description: "Dynamic crowd reactions and stadium atmosphere",
        icon: <Users2 className="w-6 h-6" />,
        category: "Environment",
        type: "Spectator Crowds"
      },
      {
        title: "Skill Moves",
        description: "Special moves and tricks for advanced gameplay",
        icon: <Sparkles className="w-6 h-6" />,
        category: "Gameplay",
        type: "Skill Moves"
      },
      {
        title: "Online Leagues",
        description: "Competitive multiplayer seasons with rankings",
        icon: <Globe className="w-6 h-6" />,
        category: "Multiplayer",
        type: "Online Leagues"
      },
      {
        title: "Commentator System",
        description: "Dynamic play-by-play commentary",
        icon: <Radio className="w-6 h-6" />,
        category: "Immersion",
        type: "Commentator System"
      }
    ]
  },
  adventure: {
    name: "Adventure Games",
    description: "Exploration and puzzle-solving mechanics",
    icon: <Compass className="w-8 h-8" />,
    features: [
      {
        title: "Open World Exploration",
        description: "Large explorable world with secrets and collectibles",
        icon: <Compass className="w-6 h-6" />,
        category: "Core",
        type: "Open World Exploration",
        ideal: true
      },
      {
        title: "Environmental Puzzles",
        description: "Logic-based challenges integrated into the world",
        icon: <Key className="w-6 h-6" />,
        category: "Core",
        type: "Environmental Puzzles",
        ideal: true
      },
      {
        title: "Treasure Hunting",
        description: "Hidden collectibles with clues and rewards",
        icon: <Gem className="w-6 h-6" />,
        category: "Gameplay",
        type: "Treasure Hunting",
        ideal: true
      },
      {
        title: "Climbing System",
        description: "Parkour and vertical traversal mechanics",
        icon: <ArrowUp className="w-6 h-6" />,
        category: "Movement",
        type: "Climbing System",
        ideal: true
      },
      {
        title: "Ancient Ruins",
        description: "Dungeon-like structures with traps and secrets",
        icon: <Castle className="w-6 h-6" />,
        category: "Environment",
        type: "Ancient Ruins"
      },
      {
        title: "Companion Characters",
        description: "AI allies that assist in puzzles and dialogue",
        icon: <Users className="w-6 h-6" />,
        category: "Social",
        type: "Companion Characters"
      },
      {
        title: "Journal System",
        description: "Quest log with lore entries and map markers",
        icon: <BookOpen className="w-6 h-6" />,
        category: "UI",
        type: "Journal System"
      },
      {
        title: "Artifact Collection",
        description: "Unique items that unlock abilities or lore",
        icon: <Award className="w-6 h-6" />,
        category: "Progression",
        type: "Artifact Collection"
      },
      {
        title: "Dynamic Weather",
        description: "Weather affecting puzzles and exploration",
        icon: <CloudRain className="w-6 h-6" />,
        category: "Environment",
        type: "Dynamic Weather"
      },
      {
        title: "Photo Mode",
        description: "Capture and share scenic moments",
        icon: <Eye className="w-6 h-6" />,
        category: "Feature",
        type: "Photo Mode"
      }
    ]
  },
  platformer: {
    name: "Platformer Games",
    description: "Precision jumping and movement mechanics",
    icon: <Gamepad2 className="w-8 h-8" />,
    features: [
      {
        title: "Jump Mechanics",
        description: "Responsive jumping with variable height and double jump",
        icon: <ArrowUp className="w-6 h-6" />,
        category: "Core",
        type: "Jump Mechanics",
        ideal: true
      },
      {
        title: "Collectible System",
        description: "Coins, stars, and other pickups scattered through levels",
        icon: <Sparkles className="w-6 h-6" />,
        category: "Core",
        type: "Collectible System",
        ideal: true
      },
      {
        title: "Checkpoint System",
        description: "Save points to respawn after falling or dying",
        icon: <Flag className="w-6 h-6" />,
        category: "Core",
        type: "Checkpoint System",
        ideal: true
      },
      {
        title: "Power-ups",
        description: "Temporary abilities like speed boost and invincibility",
        icon: <Zap className="w-6 h-6" />,
        category: "Gameplay",
        type: "Power-ups",
        ideal: true
      },
      {
        title: "Enemy AI",
        description: "Patrolling enemies with different movement patterns",
        icon: <Skull className="w-6 h-6" />,
        category: "AI",
        type: "Enemy AI"
      },
      {
        title: "Moving Platforms",
        description: "Dynamic platforms with timing challenges",
        icon: <Box className="w-6 h-6" />,
        category: "Level Design",
        type: "Moving Platforms"
      },
      {
        title: "Wall Jump",
        description: "Advanced movement tech for vertical traversal",
        icon: <Activity className="w-6 h-6" />,
        category: "Movement",
        type: "Wall Jump"
      },
      {
        title: "Boss Battles",
        description: "Multi-phase boss fights with unique mechanics",
        icon: <Crown className="w-6 h-6" />,
        category: "Combat",
        type: "Boss Battles"
      },
      {
        title: "Time Trials",
        description: "Speedrun mode with leaderboards",
        icon: <Timer className="w-6 h-6" />,
        category: "Challenge",
        type: "Time Trials"
      },
      {
        title: "Secret Areas",
        description: "Hidden rooms with bonus rewards",
        icon: <Lock className="w-6 h-6" />,
        category: "Exploration",
        type: "Secret Areas"
      }
    ]
  },
  survival: {
    name: "Survival Games",
    description: "Resource management and environmental survival mechanics",
    icon: <TreePine className="w-8 h-8" />,
    features: [
      {
        title: "Hunger & Thirst",
        description: "Survival needs requiring food and water management",
        icon: <Heart className="w-6 h-6" />,
        category: "Core",
        type: "Hunger & Thirst",
        ideal: true
      },
      {
        title: "Crafting System",
        description: "Recipe-based item creation from gathered resources",
        icon: <Hammer className="w-6 h-6" />,
        category: "Core",
        type: "Crafting System",
        ideal: true
      },
      {
        title: "Base Building",
        description: "Constructible shelters and defensive structures",
        icon: <Home className="w-6 h-6" />,
        category: "Core",
        type: "Base Building",
        ideal: true
      },
      {
        title: "Resource Gathering",
        description: "Mining, chopping, and harvesting materials",
        icon: <Axe className="w-6 h-6" />,
        category: "Core",
        type: "Resource Gathering",
        ideal: true
      },
      {
        title: "Temperature System",
        description: "Cold and heat management with clothing and shelter",
        icon: <Sun className="w-6 h-6" />,
        category: "Survival",
        type: "Temperature System"
      },
      {
        title: "Hunting & Fishing",
        description: "Animal tracking and fishing for food",
        icon: <Fish className="w-6 h-6" />,
        category: "Gameplay",
        type: "Hunting & Fishing"
      },
      {
        title: "Disease System",
        description: "Illness mechanics requiring medicine and care",
        icon: <Heart className="w-6 h-6" />,
        category: "Survival",
        type: "Disease System"
      },
      {
        title: "Storage System",
        description: "Chests and containers for item organization",
        icon: <Package className="w-6 h-6" />,
        category: "Management",
        type: "Storage System"
      },
      {
        title: "Campfire Mechanics",
        description: "Cooking, warmth, and light source management",
        icon: <Flame className="w-6 h-6" />,
        category: "Gameplay",
        type: "Campfire Mechanics"
      },
      {
        title: "Wildlife AI",
        description: "Realistic animal behavior with predator/prey dynamics",
        icon: <TreePine className="w-6 h-6" />,
        category: "AI",
        type: "Wildlife AI"
      }
    ]
  },
  strategy: {
    name: "Strategy Games",
    description: "Tactical planning and resource management systems",
    icon: <Strategy className="w-8 h-8" />,
    features: [
      {
        title: "Real-Time Strategy",
        description: "Fast-paced tactical decision making and unit control",
        icon: <ChevronRight className="w-6 h-6" />,
        category: "Core",
        type: "Real-Time Strategy",
        ideal: true
      },
      {
        title: "Unit Command",
        description: "Direct control of multiple units with formations",
        icon: <Army className="w-6 h-6" />,
        category: "Core",
        type: "Unit Command",
        ideal: true
      },
      {
        title: "Base Construction",
        description: "Strategic building placement for economy and defense",
        icon: <Castle className="w-6 h-6" />,
        category: "Core",
        type: "Base Construction",
        ideal: true
      },
      {
        title: "Tech Trees",
        description: "Research system unlocking new units and abilities",
        icon: <Star className="w-6 h-6" />,
        category: "Progression",
        type: "Tech Trees",
        ideal: true
      },
      {
        title: "Fog of War",
        description: "Limited vision system revealing explored areas",
        icon: <Eye className="w-6 h-6" />,
        category: "Gameplay",
        type: "Fog of War"
      },
      {
        title: "Faction System",
        description: "Multiple playable factions with unique units",
        icon: <Crown className="w-6 h-6" />,
        category: "Variety",
        type: "Faction System"
      },
      {
        title: "Diplomacy",
        description: "Alliance and trade systems with AI players",
        icon: <MessageSquare className="w-6 h-6" />,
        category: "Social",
        type: "Diplomacy"
      },
      {
        title: "Campaign Mode",
        description: "Story-driven missions with progressive difficulty",
        icon: <Map className="w-6 h-6" />,
        category: "Progression",
        type: "Campaign Mode"
      },
      {
        title: "Hero Units",
        description: "Powerful unique units with special abilities",
        icon: <Sword className="w-6 h-6" />,
        category: "Combat",
        type: "Hero Units"
      },
      {
        title: "Victory Conditions",
        description: "Multiple win conditions like domination or economy",
        icon: <Trophy className="w-6 h-6" />,
        category: "Objectives",
        type: "Victory Conditions"
      }
    ]
  }
};