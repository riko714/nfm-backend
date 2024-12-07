import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'SERVER_PLU_SG_DATA' })
export class Product {
  @PrimaryColumn('uniqueidentifier', { name: 'PLU_ID' })
  PLU_ID: string;

  @Column('varchar', { name: 'GroupDesc', length: 50, nullable: true })
  GroupDesc: string;

  @Column('varchar', { name: 'CategoryEN', length: 100, nullable: true })
  CategoryEN: string;

  @Column('varchar', { name: 'UPC_Code', length: 15, nullable: true })
  UPC_Code: string;

  @Column('varchar', { name: 'Barcode', length: 24, nullable: true })
  Barcode: string;

  @Column('varchar', { name: 'Brand', length: 100, nullable: true })
  Brand: string;

  @Column('varchar', { name: 'DESC_EN1', length: 50, nullable: true })
  DESC_EN1: string;

  @Column('numeric', { name: 'ItemSize', precision: 7, scale: 2, nullable: true })
  ItemSize: number;

  @Column('varchar', { name: 'ItemUnit', length: 10, nullable: true })
  ItemUnit: string;

  @Column('int', { name: 'QtyinaCase', nullable: true })
  QtyinaCase: number;

  @Column('numeric', { name: 'CaseCost', precision: 11, scale: 2, nullable: true })
  CaseCost: number;

  @Column('numeric', { name: 'UnitCost', precision: 11, scale: 3, nullable: true })
  UnitCost: number;

  @Column('numeric', { name: 'Regular_Price', precision: 11, scale: 2, nullable: true })
  Regular_Price: number;

  @Column('money', { name: 'SalePrice', nullable: true })
  SalePrice: number;

  @Column('money', { name: 'On_hand', nullable: true })
  On_hand: number;

  @Column('numeric', { name: 'QTYSold', precision: 18, scale: 2, nullable: false })
  QTYSold: number;

  @Column('numeric', { name: 'TotalSold', precision: 18, scale: 2, nullable: true })
  TotalSold: number;

  @Column('varchar', { name: 'Firstsaledate', length: 50, nullable: true })
  Firstsaledate: string;

  @Column('varchar', { name: 'LastSold_date', length: 50, nullable: true })
  LastSold_date: string;

  @Column('datetime', { name: 'LAST_SOLD', nullable: true })
  LAST_SOLD: Date;

  @Column('datetime', { name: 'CreatedDate', nullable: true })
  CreatedDate: Date;

  @Column('numeric', { name: 'ReceivedQty', precision: 11, scale: 2, nullable: true })
  ReceivedQty: number;

  @Column('datetime', { name: 'ReceivedDate', nullable: true })
  ReceivedDate: Date;

  @Column('int', { name: 'IsMasterPLU', nullable: true })
  IsMasterPLU: number;

  @Column('varchar', { name: 'MasterPLU', length: 24, nullable: true })
  MasterPLU: string;

  @Column('nvarchar', { name: 'VendorID', length: 50, nullable: true })
  VendorID: string;

  @Column('varchar', { name: 'Aisle', length: 50, nullable: true })
  Aisle: string;

  @Column('numeric', { name: 'SoldSinceLastReceived', precision: 18, scale: 2, nullable: true })
  SoldSinceLastReceived: number;

  @Column('money', { name: 'Sold7Days', nullable: true })
  Sold7Days: number;

  @Column('money', { name: 'Sold30Days', nullable: true })
  Sold30Days: number;

  @Column('money', { name: 'Sold90Days', nullable: true })
  Sold90Days: number;

  @Column('money', { name: 'Sold180Days', nullable: true })
  Sold180Days: number;

  @Column('numeric', { name: 'STOCK', precision: 18, scale: 2, nullable: true })
  STOCK: number;

  @Column('money', { name: 'Count7Days', nullable: true })
  Count7Days: number;

  @Column('money', { name: 'Count30Days', nullable: true })
  Count30Days: number;

  @Column('money', { name: 'Count90Days', nullable: true })
  Count90Days: number;

  @Column('money', { name: 'Count180Days', nullable: true })
  Count180Days: number;

  @Column('nvarchar', { name: 'sgBRAND', length: 50, nullable: true })
  sgBRAND: string;

  @Column('nvarchar', { name: 'sgDESC', length: 100, nullable: true })
  sgDESC: string;

  @Column('int', { name: 'sgPack', nullable: true })
  sgPack: number;

  @Column('nvarchar', { name: 'sgSIZE', length: 30, nullable: true })
  sgSIZE: string;

  @Column('money', { name: 'sgCost', nullable: true })
  sgCost: number;

  @Column('money', { name: 'sgRetailPrice', nullable: true })
  sgRetailPrice: number;

  @Column('nvarchar', { name: 'sgSupplierName', length: 50, nullable: true })
  sgSupplierName: string;

  @Column('text', { name: 'Category Description', nullable: true })
  categoryDescription: string;

  @Column('int', { name: 'totalWaste', nullable: true })
  totalWaste: number;

  @Column('datetime', { name: 'Last_Wasted', nullable: true })
  Last_Wasted: Date;

  @Column('int', { name: 'Discontinued', nullable: true })
  Discontinued: number;
}
