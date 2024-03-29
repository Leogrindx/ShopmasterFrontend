import ItemService from "../service/ItemService";

export const all = async () => {
  try {
    const res = await ItemService.all();
    return res.data;
  } catch (e) {}
};
export const routeItemsQuery = (
  gender: string,
  filter: string,
  searchParams: string
) => ({
  queryKey: [gender, filter, searchParams],
  queryFn: async () =>
    filter
      ? ItemService.filter(gender, filter, searchParams)
      : ItemService.route(gender, searchParams),
});

export const getOne = async (ean: string) => {
  try {
    const res = await ItemService.getOne(ean);
    return res.data;
  } catch (e) {}
};
