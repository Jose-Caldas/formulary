import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from "../../utils/helpers";
import userEvent from "@testing-library/user-event";



import "jest-styled-components";

import Checkbox from '.';

describe("<Checkbox/>", () => {
    it("should render input and a label", () => {
        renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

        //input apartir do papel/Role
        expect(screen.getByRole("checkbox")).toBeInTheDocument();

        //input apartir da label associada
        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

        //label apartir do texto dela
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
            "for",
            "check"
        );
    });

        // teste do onCheck

    it("should checkbox is checked by default", async () => {
        const onCheck = jest.fn();

        renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} isChecked />);

        userEvent.click(screen.getByRole("checkbox"));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
        expect(onCheck).toHaveBeenCalledWith(false);
    });

})