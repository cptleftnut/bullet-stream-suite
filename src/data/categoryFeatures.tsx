import { 
  Sprout, Users, Coins, Sparkles, Package, Settings,
  Crosshair, Target, Zap, Shield, Skull, Radio,
  Car, Flag, MapPin, Trophy, Gauge, Wrench,
  Globe, MessageSquare, Swords, Users2, Crown, Building,
  BookOpen, Briefcase, Map, Heart, Star, Award,
  Factory, Trees, Home, Hammer, Mountain, Layers
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
      }
    ]
  }
};