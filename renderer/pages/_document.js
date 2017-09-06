import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';
import {ServerStyleSheet} from 'styled-components';

export default class StyledComponentsDocument extends Document {
    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        const styleTags = sheet.getStyleElement();

        return (
            <html>
                <Head>
                    {styleTags}
                </Head>
                <body>
                    <section className="root">
                        {main}
                    </section>
                    <NextScript />
                </body>
            </html>
        );
    }
}
