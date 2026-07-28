export type PropInfo = {
  name: string;
  type: string;
  defaultValue?: string;
};

export type ComponentEntry = {
  id: string;
  slug: string;
  category: string;
  categoryCn: string;
  name: string;
  nameCn: string;
  video: string;
  description: string;
  descriptionCn: string;
  docsUrl: string;
  dependencies: string[];
  props: PropInfo[];
  implementation: string[];
  style: string[];
  useCases: string[];
  complexity: "轻量" | "中等" | "较高";
  sourceLines: number;
  usage: string;
  aiPrompt: string;
};
