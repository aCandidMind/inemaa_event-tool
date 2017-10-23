export function getItemsFromSemicolonField(field, maxItems) {
  if (!field) {
    return [];
  }
  let items = field.split(';').map(o => o.trim()).filter(o => o !== '');
  if (maxItems) {
    items = items.slice(0, maxItems);
  }
  return items;
}

export function withoutItem(list, index) {
  return list.filter((item, i) => i !== index);
}

export function displayAsDistance(value) {
  const output = value || 0;
  return output + 'km';
}

export function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
