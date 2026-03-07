export const fetchJson = async <T>(url:string): Promise<T> => {
  const res = await fetch(url,
    { cache: 'force-cache' }
  );

    const json = await res.json();

  return json.data;
}
