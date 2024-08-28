export type MessageItem = {
  content: string;
  createdAt: Date | string | number;
  author?: string;
  isAttend?: boolean;
  guests?: number | string;
};
