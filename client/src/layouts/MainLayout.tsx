import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
    return <div>{children}</div>;
};
