import React, {useCallback, useEffect, useState} from 'react';
import {Meme} from '../../domain/types/Meme';
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from '@heroui/react';
import {Button} from '@heroui/button';

export const TableBlock = () => {
  const [data, setData] = useState<Meme[]>();

  useEffect(() => {
    fetch('/meme-app/meme.json')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw Error('no');
      })
      .then((res) => setData(res));
  }, []);

  const columns = [
    {key: 'id', label: 'Id'},
    {key: 'name', label: 'Name'},
    {key: 'like', label: 'Like'},
    {key: 'actions', label: 'Actions'},
  ];

  const getRandomIntInclusive = (min = 0, max = 99) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const renderCell = useCallback((meme: Meme, columnKey: React.Key) => {
    const cellValue = meme[columnKey as keyof Meme];

    switch (columnKey) {
      case 'id':
        return <p>{cellValue}</p>;
      case 'name':
        return <p>{cellValue}</p>;
      case 'like':
        return <p>{getRandomIntInclusive()}</p>;
      case 'actions':
        return (
          <Button className='bg-blue-500 text-white hover:bg-blue-600 rounded-xl' color='primary'>
            Edit
          </Button>
        );
    }
  }, []);

  return (
    <div className='flex items-center justify-center'>
      {data && (
        <Table
          className='max-w-[900px] text-sm shadow-md inset-shadow-sm rounded-xl mb-[30px]'
          classNames={{
            th: 'bg-gray-100 text-gray-600 uppercase h-10',
          }}
          aria-label='Meme table with dynamic content'
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} align='start'>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>

          <TableBody items={data}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
