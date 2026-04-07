import "@testing-library/jest-dom";
import React from "react";

// Mock next/image to prevent Jest from hanging
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        return React.createElement('img', props);
    },
}));
