'use client';
import { users } from '@/libraries/blocks/checking/data';
import OverviewCard from '@/libraries/blocks/checking/overview-card';
import OverViewItem from '@/libraries/blocks/checking/overview-item';
import { UserItem, UserStatus, UserType } from '@/types/common';
import localStorageHelper, { EKeyStorage } from '@/utils/helpers/local-storage';
import clsx from 'clsx';
import { ReactNode, useEffect, useMemo, useState } from 'react';

export default function CheckingView() {
  const initialData = localStorageHelper.getObject(EKeyStorage.CHECKING, users) as UserItem[];
  const [data, setData] = useState(initialData);
  const totalActive = useMemo(
    () => data.filter((item) => item.status === UserStatus.Active),
    [data]
  );
  const totalInactive = useMemo(
    () => data.filter((item) => item.status === UserStatus.Inactive),
    [data]
  );

  useEffect(() => {
    localStorageHelper.setObject(EKeyStorage.CHECKING, data);
  }, [data]);

  const onHandleSelectUser = (userItem: UserItem) => {
    const newUsersSelected = [...data];
    const itemValidIndex = newUsersSelected.findIndex((item) => item.id === userItem.id);
    const currentItem = newUsersSelected[itemValidIndex];
    const status = currentItem.status;
    const newStatus = status === UserStatus.Active ? UserStatus.Inactive : UserStatus.Active;
    const newUser: UserItem = {
      ...currentItem,
      status: newStatus,
      checked: newStatus === UserStatus.Active
    };
    newUsersSelected.splice(itemValidIndex, 1, newUser);
    setData(newUsersSelected);
  };

  return (
    <div>
      <p className="font-secondary text-3xl text-secondary font-medium capitalize flex gap-1a items-center justify-center py-5 border-b border-solid border-label">
        Thanh Vung & Hoang Dieu
      </p>
      <div className="p-5">
        {/* overview */}
        <div className="flex items-center gap-4">
          <OverViewItem title="Tổng danh sách" count={users.length} type="info" />
          <OverViewItem title="Đã đến" count={totalActive.length} type="success" />
          <OverViewItem title="Chưa đến" count={totalInactive.length} type="danger" />
        </div>

        {/* overview card */}
        <div className="flex items-center gap-4 flex-wrap mt-6">
          <OverviewCard title="Tổng danh sách" count={users.length} type="info" />
          <OverviewCard title="Đã đến" count={totalActive.length} type="success" />
          <OverviewCard title="Chưa đến" count={totalInactive.length} type="danger" />
        </div>

        {/* list */}
        <h3 className="m-0 mt-7 font-bold text-xl">Danh sách tham dự</h3>
        <div className="overflow-x-auto">
          <div className="mt-2 w-full rounded-md min-w-[1000px] border border-solid border-label">
            {/* header */}
            <div className="grid grid-cols-12 w-full bg-secondary p-4 rounded-tl-md rounded-tr-md">
              <CellHeaderTable label="#" className="col-span-1" />
              <CellHeaderTable label="Tick" className="col-span-1" />
              <CellHeaderTable label="Tên khách" className="col-span-3" />
              <CellHeaderTable label="Trạng thái" className="col-span-2" />
              <CellHeaderTable label="Nhóm" className="col-span-2" />
              <CellHeaderTable label="Facebook" className="col-span-3" />
            </div>
            {/* body */}
            <div>
              {data.map((item, index) => {
                return (
                  <RowTable
                    item={item}
                    key={item.id}
                    onClick={() => onHandleSelectUser(item)}
                    checked={item.checked || false}
                    className={clsx({
                      'bg-[#f2f2f2]': index % 2 === 0
                    })}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CellHeaderTable = ({ label, className }: { label: string; className?: string }) => {
  return <span className={clsx('px-2 text-white font-bold', className)}>{label}</span>;
};

const RowTable = ({
  item,
  className,
  onClick,
  checked = false
}: {
  item: UserItem;
  className?: string;
  onClick: () => void;
  checked: boolean;
}) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-12 w-full p-4 transition-all ease-linear hover:bg-label',
        className
      )}
    >
      <CellTable
        label={
          <span className="cursor-pointer" onClick={onClick}>
            {item.id}
          </span>
        }
        className="col-span-1"
      />
      <CellTable
        label={
          <input className="cursor-pointer" type="checkbox" onClick={onClick} checked={checked} />
        }
        className="col-span-1"
      />
      <CellTable
        label={
          <span
            className={clsx('cursor-pointer', {
              'line-through': checked
            })}
            onClick={onClick}
          >
            {item.name}
          </span>
        }
        className="col-span-3"
      />
      <CellTable
        label={item.status === UserStatus.Inactive ? 'Chưa đến' : 'Đã đến'}
        className={clsx('col-span-2', {
          'text-success': UserStatus.Active === item.status,
          'text-danger': UserStatus.Inactive === item.status
        })}
      />
      <CellTable
        label={item.type === UserType.Groom ? 'Chú rể' : 'Cô dâu'}
        className="col-span-2"
      />
      <CellTable label={item.facebook} className="col-span-3" />
    </div>
  );
};

const CellTable = ({
  label,
  className
}: {
  label: string | number | ReactNode;
  className?: string;
}) => {
  return <div className={clsx('px-2 font-bold', className)}>{label}</div>;
};
