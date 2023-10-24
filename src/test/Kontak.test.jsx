import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; 
import Kontak from "../pages/kontak";

test("Menyimpan dan menampilkan nilai dari input formulir", () => {
  const { getByLabelText, getByText } = render(

    <BrowserRouter>
      <Kontak />
    </BrowserRouter>
  );


  const emailInput = getByLabelText(/email address/i);
  const namaInput = getByLabelText(/nama/i);
  const pesanInput = getByLabelText(/pesan/i);


  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(namaInput, { target: { value: "John Doe" } });
  fireEvent.change(pesanInput, { target: { value: "Pesan pengujian" } });


  expect(emailInput.value).toBe("test@example.com");
  expect(namaInput.value).toBe("John Doe");
  expect(pesanInput.value).toBe("Pesan pengujian");

  const submitButton = getByText(/submit/i);


  fireEvent.click(submitButton);

});
