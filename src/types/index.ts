export type Category = "Frontend" | "Backend" | "Database" | "Language" | "Styling" | "DevOps";

export type Difficulty = "Beginner-Friendly" | "Intermediate";

export interface Technology {
  id: string;
  name: string;
  tag: string;
  tagColor: "blue" | "green" | "orange" | "pink" | "yellow" | "purple";
  description: string;
  category: Category;
  difficulty: Difficulty;
  rating: number;
  icon: string; // emoji or short glyph used as icon
  iconBg: string;
}
