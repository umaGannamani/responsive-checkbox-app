import React, { useState, useEffect, useRef } from "react";

// Custom hook to handle indeterminate state
function useIndeterminate(ref, isIndeterminate) {
  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = isIndeterminate;
    }
  }, [ref, isIndeterminate]);
}

const CheckboxTree = () => {
  const [checkedItems, setCheckedItems] = useState({
    all: false,
    fruits: false,
    vegetables: false,
    apple: false,
    banana: false,
    orange: false,
    broccoli: false,
    carrot: false,
    tomato: false,
  });

  // refs for parent checkboxes
  const fruitsRef = useRef(null);
  const vegetablesRef = useRef(null);
  const allRef = useRef(null);

  // Apply indeterminate state for Fruits
  const fruitsChildren = ["apple", "banana", "orange"];
  const fruitsCheckedCount = fruitsChildren.filter((child) => checkedItems[child]).length;
  useIndeterminate(fruitsRef, fruitsCheckedCount > 0 && fruitsCheckedCount < fruitsChildren.length);

  // Apply indeterminate state for Vegetables
  const vegetablesChildren = ["carrot", "tomato", "broccoli"];
  const vegCheckedCount = vegetablesChildren.filter((child) => checkedItems[child]).length;
  useIndeterminate(vegetablesRef, vegCheckedCount > 0 && vegCheckedCount < vegetablesChildren.length);

  // Apply indeterminate state for Select All
  const allChildren = [...fruitsChildren, ...vegetablesChildren];
  const allCheckedCount = allChildren.filter((child) => checkedItems[child]).length;
  useIndeterminate(allRef, allCheckedCount > 0 && allCheckedCount < allChildren.length);

  // Handle checkbox changes
  const handleChange = (key) => {
    let newChecked = { ...checkedItems };

    if (key === "all") {
      const newValue = !checkedItems.all;
      newChecked = Object.keys(newChecked).reduce((acc, item) => {
        acc[item] = newValue;
        return acc;
      }, {});
    } else if (key === "fruits") {
      const newValue = !checkedItems.fruits;
      fruitsChildren.forEach((child) => (newChecked[child] = newValue));
      newChecked.fruits = newValue;
    } else if (key === "vegetables") {
      const newValue = !checkedItems.vegetables;
      vegetablesChildren.forEach((child) => (newChecked[child] = newValue));
      newChecked.vegetables = newValue;
    } else {
      newChecked[key] = !checkedItems[key];
    }

    // Update parent states based on children
    newChecked.fruits = fruitsChildren.every((child) => newChecked[child]);
    newChecked.vegetables = vegetablesChildren.every((child) => newChecked[child]);
    newChecked.all = allChildren.every((child) => newChecked[child]);

    setCheckedItems(newChecked);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <label>
        <input
          type="checkbox"
          ref={allRef}
          checked={checkedItems.all}
          onChange={() => handleChange("all")}
        />
        Select All
      </label>

      <div style={{ marginLeft: "20px" }}>
        <label>
          <input
            type="checkbox"
            ref={fruitsRef}
            checked={checkedItems.fruits}
            onChange={() => handleChange("fruits")}
          />
          Fruits
        </label>
        <div style={{ marginLeft: "20px" }}>
          <label>
            <input
              type="checkbox"
              checked={checkedItems.apple}
              onChange={() => handleChange("apple")}
            />
            Apple
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={checkedItems.banana}
              onChange={() => handleChange("banana")}
            />
            Banana
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={checkedItems.orange}
              onChange={() => handleChange("orange")}
            />
            Orange
          </label>
        </div>
      </div>

      <div style={{ marginLeft: "20px" }}>
        <label>
          <input
            type="checkbox"
            ref={vegetablesRef}
            checked={checkedItems.vegetables}
            onChange={() => handleChange("vegetables")}
          />
          Vegetables
        </label>
        <div style={{ marginLeft: "20px" }}>
          <label>
            <input
              type="checkbox"
              checked={checkedItems.carrot}
              onChange={() => handleChange("carrot")}
            />
            Carrot
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={checkedItems.tomato}
              onChange={() => handleChange("tomato")}
            />
            Tomato
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={checkedItems.broccoli}
              onChange={() => handleChange("broccoli")}
            />
            Broccoli
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxTree;
