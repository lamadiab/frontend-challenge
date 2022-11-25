import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ReactElement } from 'react';

import dummyData from '../../../dummyData.json';

export const UserHistoryView = (): ReactElement => {
  const tripHistory = dummyData.HISTORY_DATA;
  const columns: GridColDef[] = [];

  const rows = [];

  let i = 0;

  for (const entry in tripHistory) rows.push({ id: i++, ...tripHistory[entry] });
  for (const key in tripHistory[0]) columns.push({ field: key, headerName: key.toUpperCase(), width: 180 });

  return <div style={{ height: 400, width: '100%' }}>{<DataGrid rows={rows} columns={columns} />}</div>;
};
