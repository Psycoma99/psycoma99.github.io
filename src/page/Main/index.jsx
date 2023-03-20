import Clock from "shared/component/Clock";
import Weather from "shared/component/Weather";
import { Wrapper, Container, MessageBox } from "./style"

function Main() {
    return (
        <Wrapper>
            <Container>
                <div>
                    <Clock />
                    <Weather />
                </div>
                <div>
                    <MessageBox />
                    <MessageBox />
                </div>
            </Container>
        </Wrapper>
    );
}

export default Main;