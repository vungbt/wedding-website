import fs from 'fs';
import path from 'path';
const defaultFilePath = path.join(process.cwd(), 'public/stories', 'messages.json');

export enum EStoreName {
  Messages = 'messages'
}

export const readData = <T>(storeName?: string) => {
  const dataFilePath = storeName
    ? path.join(process.cwd(), 'public/stories', `${storeName}.json`)
    : defaultFilePath;
  const fileData = fs.readFileSync(dataFilePath, 'utf8');
  const data: T = JSON.parse(fileData);
  return data;
};

export const writeData = <T>(data: T, storeName?: string): void => {
  const dataFilePath = storeName
    ? path.join(process.cwd(), 'public/stories', `${storeName}.json`)
    : defaultFilePath;
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

export const resetData = (storeName?: string) => {
  const dataFilePath = storeName
    ? path.join(process.cwd(), 'public/stories', `${storeName}.json`)
    : defaultFilePath;
  fs.writeFileSync(dataFilePath, JSON.stringify(dataFilePath, null, 2), 'utf8');
  console.log('Data reset to default values');
};
