export const TABLES = {
  DRAW2: 'draw 2',
  EMPLOYEES: 'employees',
  GENERAL_DRAW: 'draw 1',
}as const;

export type TableName = keyof typeof TABLES;
export type TableValue = typeof TABLES[TableName];