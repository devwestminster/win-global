export function scrollActiveItemIntoView(
  container: HTMLElement,
  item: HTMLElement,
  behavior: ScrollBehavior,
) {
  const containerBounds = container.getBoundingClientRect();
  const itemBounds = item.getBoundingClientRect();

  container.scrollTo({
    left:
      container.scrollLeft +
      itemBounds.left -
      containerBounds.left -
      (container.clientWidth - item.offsetWidth) / 2,
    behavior,
  });
}
