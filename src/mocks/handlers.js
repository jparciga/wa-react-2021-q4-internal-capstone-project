import { rest } from "msw";
import { API_BASE_URL } from "../utils/constants";

const featuredBanners = require("./en-us/featured-banners.json");
const productCategories = require("./en-us/product-categories.json");
const products = require("./en-us/products.json");
const featuredProducts = require("./en-us/featured-products.json");

const mockApiRef = "mockRef";

const handlers = [
  rest.get(API_BASE_URL, (_, res, ctx) =>
    res(ctx.json({ refs: [{ ref: mockApiRef }] }))
  ),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const queries = req.url.searchParams.getAll("q");
    if (queries[0] === '[[at(document.type, "banner")]]') {
      return res(ctx.json(featuredBanners));
    }
    if (queries[0] === '[[at(document.type, "category")]]') {
      return res(ctx.json(productCategories));
    }
    if (
      queries[0] === '[[at(document.type, "product")]]' ||
      queries[0].match(/[[at(document.id, ".*")]]/)
    ) {
      if (queries[1] && queries[1] === '[[at(document.tags, ["Featured"])]]') {
        return res(ctx.json(featuredProducts));
      }
      return res(ctx.json(products));
    }
    return res(ctx.status(404));
  }),
];

export default handlers;
