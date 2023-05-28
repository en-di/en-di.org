declare interface Article {
  author: string;
  url: string;
  title: string;
  tags: string[];
  date: string;
  summary?: string;
  content: string;
  isDraft?: boolean;
}
