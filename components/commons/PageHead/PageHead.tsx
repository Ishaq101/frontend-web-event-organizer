import Head from 'next/head';


interface PropTypes {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
}

const PageHead = (props: PropTypes) => {
    const {title = 'acara'} = props;
    return (
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/general/logo.svg" type="image/svg+xml"/>
            <link rel="shortcut icon" href="/images/general/logo.svg" type="image/svg+xml"/>
        </Head>
    )
}
export default PageHead;