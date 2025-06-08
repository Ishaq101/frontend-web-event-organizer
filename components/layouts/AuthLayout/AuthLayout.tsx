import PageHead from '../../commons/PageHead';
import { Fragment } from 'react';

interface PropTypes {
    title?: string;
    children?: React.ReactNode;
}

const AuthLayout = (props: PropTypes) => {
    const {title, children} = props;
    return (
        <Fragment>
            <PageHead title={title}></PageHead>
            {/* <section className='max-w-3xl 3xl:container p-6'> */}
            <section>
                {children}
            </section>
        </Fragment>
    )

};

export default AuthLayout;