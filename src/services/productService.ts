import { NewProduct } from '../interfaces/Product';
import * as productModel from '../models/productModel';

const create = async ({ name, amount }: NewProduct) => {
  const newProd = await productModel.create({ name, amount });

  return newProd;
};

const getAll = async ({}) => {};

export {
  create,
  getAll,
};