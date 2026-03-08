export const fetchJson = async <T>(url:string): Promise<T> => {
  const res = await fetch(url,
    { cache: 'no-store' }
  );

    const json = await res.json();

  return json.data;
}

export const fetchJsonMeta = async <T>(url:string): Promise<T> => {
  const res = await fetch(url,
    { cache: 'no-store' }
  );

    const json = await res.json();

  return json.meta;
}
