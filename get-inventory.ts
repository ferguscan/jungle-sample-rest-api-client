// Paginate through inventory records, spitting them out to the console
import {
  InventoryModelWithRelations,
  InventoryService,
  PageInfo,
} from './generated';

type InventoryType = {
  results?: InventoryModelWithRelations[] | undefined;
  pageInfo?: PageInfo | undefined;
};

async function getInventory() {
  // Create the client instance with server and authentication details
  let hasMore: boolean | undefined = false;
  let nextCursor: string | undefined = undefined;
  let pageCount = 1;

  do {
    const inventory: InventoryType = await InventoryService.inventoryFind(
      process.env.JUNGLE_AUTH_HEADER,
      nextCursor,
      100,
      '100',
    );

    hasMore = inventory.pageInfo?.hasMore;
    nextCursor = inventory.pageInfo?.nextCursor;
    console.log(
      `Page ${pageCount} inventory ${JSON.stringify(inventory, null, 2)}`,
    );
    pageCount++;
  } while (hasMore);
}

getInventory();
