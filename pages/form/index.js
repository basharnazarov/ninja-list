// import React from 'react'

// const FormData = () => {
//     return (
//         <div>
//             <p>form data</p>
//         </div>
//     )
// }


// export default FormData

import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";


import "../../styles/form.module.css";
import { education_period as data } from "./data";

let renderCount = 0;

function FormData() {
  const { reset, register, control, handleSubmit } = useForm({
    // defaultValues: {
    //   fees: [{ name: "useFieldArray" }]
    // }
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "fees"
    }
  );

  useEffect(() => {
    console.log("data", data);
    reset({
      fees: data.college.fees
    });
  }, [reset]);

  const onSubmit = data => console.log("data", data);

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                name={`fees[${index}].period.start`}
                defaultValue={`${
                  item && item.period ? item.period.start : "to fill"
                }`}
                ref={register({})}
              />
              <input
                name={`fees[${index}].period.end`}
                defaultValue={`${
                  item && item.period ? item.period.end : "to fill"
                }`}
                ref={register({})}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ name: "append", start: "", end: "" });
          }}
        >
          append
        </button>
        <button
          type="button"
          onClick={() => prepend({ name: "prepend", start: "" })}
        >
          prepend
        </button>
        <button
          type="button"
          onClick={() =>
            insert(parseInt(2, 10), { name: "insert", start: "", end: "" })
          }
        >
          insert at
        </button>

        <button type="button" onClick={() => swap(1, 2)}>
          swap
        </button>

        <button type="button" onClick={() => move(1, 4)}>
          move
        </button>

        <button type="button" onClick={() => remove(1)}>
          remove at
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}

export default FormData
