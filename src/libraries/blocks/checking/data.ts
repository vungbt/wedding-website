import { UserItem, UserStatus, UserType } from '@/types/common';

export const users: UserItem[] = [
  // bride
  { id: 1, name: 'Bạn Vi', type: UserType.Bride, facebook: '', status: UserStatus.Inactive },
  { id: 2, name: 'Bạn Quỳnh', type: UserType.Bride, facebook: '', status: UserStatus.Inactive },
  { id: 3, name: 'Bạn Lý', type: UserType.Bride, facebook: '', status: UserStatus.Inactive },
  {
    id: 4,
    name: 'Nam người yêu Lý',
    type: UserType.Bride,
    facebook: UserStatus.Inactive,
    status: UserStatus.Inactive
  },
  {
    id: 5,
    name: 'Chị Ngọc Phương',
    type: UserType.Bride,
    facebook: '',
    status: UserStatus.Inactive
  },
  { id: 6, name: 'Bạn Sáng', type: UserType.Bride, facebook: '', status: UserStatus.Inactive },
  { id: 7, name: 'Bạn Đức', type: UserType.Bride, facebook: '', status: UserStatus.Inactive },
  { id: 8, name: 'Bạn Tú', type: UserType.Bride, facebook: '', status: UserStatus.Inactive },
  { id: 9, name: 'Bạn Lộc', type: UserType.Bride, facebook: '', status: UserStatus.Inactive },
  { id: 10, name: 'Anh Lợi', type: UserType.Bride, facebook: '', status: UserStatus.Inactive },
  // groom
  { id: 11, name: 'Đoàn Dâu', type: UserType.Groom, facebook: '', status: UserStatus.Inactive },
  {
    id: 12,
    name: 'Anh Lê Hoàng',
    type: UserType.Groom,
    facebook: '',
    status: UserStatus.Inactive
  },
  {
    id: 13,
    name: 'Nguyễn Cao Vang',
    type: UserType.Groom,
    facebook: '',
    status: UserStatus.Inactive
  },
  {
    id: 14,
    name: 'Phạm Thu Huệ',
    type: UserType.Groom,
    facebook: '',
    status: UserStatus.Inactive
  },
  {
    id: 15,
    name: 'Quỳnh Quỳnh',
    type: UserType.Groom,
    facebook: '',
    status: UserStatus.Inactive
  },
  { id: 16, name: 'Bạn Tâm', type: UserType.Groom, facebook: '', status: UserStatus.Inactive },
  { id: 17, name: 'Lê Thanh Tú', type: UserType.Groom, facebook: '', status: UserStatus.Inactive }
];
