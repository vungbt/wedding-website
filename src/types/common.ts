export enum UserType {
  Bride = 'bride',
  Groom = 'groom'
}
export enum UserStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type UserItem = {
  id: number;
  name: string;
  type: UserType;
  facebook: string;
  status: UserStatus;
  checked?: boolean;
};
