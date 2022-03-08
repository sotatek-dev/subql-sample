import {Block,Sample} from '../types';

export async function handleBlock(block: any): Promise<void> {
  let record = await Block.get(block.block.blockhash);
  if (!record) {
      record = new Block(block.block.blockhash);
  }
  //Record block number
  record.slot = block.block.parentSlot + 1;
  await record.save();
}

export async function handleTransaction(transaction: any): Promise<void> {

  let record= new Sample(transaction.transaction.message.recentBlockhash)
  // let record = new Transaction(transaction.transaction.message.recentBlockhash);
   record.field1 = transaction.transaction.message.recentBlockhash;
  record.field2 = transaction.slot;
  // record.blockHeight = transaction.blockHeight;
  // record.signature = transaction.transaction.signatures[0];
  //  record.programId = [...new Set(transaction.meta.logMessages.map(log => log.split(' ')[1]))] as string[];
 
  // record.status = Object.keys(transaction.meta.status)[0];
  await record.save();
}
