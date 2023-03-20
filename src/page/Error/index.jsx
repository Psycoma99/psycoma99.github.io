import { Wrapper, ErrorTextWrapper } from "./style"
import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <Wrapper>
            <ErrorTextWrapper>
                <h1>Error - {error.statusText || error.message}</h1>
            </ErrorTextWrapper>
        </Wrapper>
    );
}

export default Error;