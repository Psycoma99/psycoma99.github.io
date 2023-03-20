import Clock from "shared/component/Clock";
import Weather from "shared/component/Weather";
import Message from "shared/component/Message";
import { Wrapper, Container, MessageBox } from "./style"

function Main() {
    return (
        <Wrapper>
            <Container>
                <section className="top">
                    <Clock />
                    <Weather />
                </section>
                <section className="bottom">
                    <Message />
                    <Message />
                </section>
            </Container>
        </Wrapper>
    );
}

export default Main;