// When want to read the HTML element metadata.
const IReadTheDivMetadata = () => {
  // Delay determines the debounce time in ms.
  // Axis can be "x" or "y".
  const [metadata, ref] = useScroll<HTMLDivElement>({ delay: 1000, axis: "x" });

  return (
    <div ref={ref}>
      {/* Prints the div scroll x metadata. */}
      {console.log(metadata)}
    </div>
  );
};

// When we want to read window metadata.
const IReadTheWindowMetadata = () => {
  const [metadata] = useScroll();

  return (
    <div>
      {/* Prints the window scroll y metadata. */}
      {console.log(metadata)}
    </div>
  );
};
