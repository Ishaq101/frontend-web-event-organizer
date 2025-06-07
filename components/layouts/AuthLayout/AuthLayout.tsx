import PageHead from '../../commons/PageHead';

interface PropTypes {
    title?: string;
    children?: React.ReactNode;
}

const AuthLayout = (props: PropTypes) => {
    const {title, children} = props;
    return (
        <>
            <PageHead title={title}></PageHead>
            {/* <section className='max-w-3xl 3xl:container p-6'> */}
            <section>
                {children}
            </section>
        </>
    )

};

export default AuthLayout;