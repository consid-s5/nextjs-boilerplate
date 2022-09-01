/**
 * Meta
 */

import React from 'react';
import Head from 'next/head';

interface Props {
	/** React children */
	children?: React.ReactNode

	/** Title for the page */
	title?: string;

	/** Meta description */
	description?: string;

	/** Meta keywords */
	keywords?: string;

	/** Open graph site name
	 *
	 * _A one to two sentence description of your object._
	 */
	ogSiteName?: string;

	/** Open graph type
	 *
	 * _The [type](https://ogp.me/#types) of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required._
	 */
	ogType?: string;

	/** Open graph title
	 *
	 * _The title of your object as it should appear within the graph, e.g., "The Rock"._
	 */
	ogTitle?: string;

	/** Open graph url
	 *
	 * _The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "http://www.imdb.com/title/tt0117500/"._
	 */
	ogUrl?: string;

	/** Open graph description
	 *
	 * _A one to two sentence description of your object._
	 */
	ogDescription?: string;

	/** Open graph image
	 *
	 * _An image URL which should represent your object within the graph._
	 *
	 * Read more: [Formats for open graph images](https://whatabout.dev/formats-for-open-graph-images)
	 */
	ogImage?: string | string[];

	/** Twitter card
	 *
	 * _The card type, which will be one of “summary”, “summary_large_image”, “app”, or “player”._
	 */
	twitterCard?: string;

	/** Twitter card title
	 *
	 * _A concise title for the related content._
	 */
	twitterTitle?: string;

	/** Twitter card description
	 *
	 * _A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description or use this field to describe the general services provided by the website._
	 */
	twitterDescription?: string;

	/** Twitter card image
	 *
	 * _A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported._
	 *
	 * Read more: [Formats for open graph images](https://whatabout.dev/formats-for-open-graph-images)
	 */
	twitterImage?: string;
}

/**
 * Component that handles meta data.
 *
 * - https://ogp.me/
 * - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
 * - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started
 */
const Meta: React.FC<Props> = (props) => {
	const {
		children,
		title,
		description,
		keywords,
		ogSiteName,
		ogType,
		ogTitle,
		ogUrl,
		ogImage,
		twitterCard,
		twitterTitle,
		twitterImage,
		ogDescription = description,
		twitterDescription = description,
	} = props;

	const renderOgImage = (image: string | string[]) => {
		let ogImages: string[];

		if (typeof image === 'string') {
			ogImages = [image];
		} else {
			ogImages = image;
		}

		return ogImages.map((img: string) => {
			return <meta property="og:image" key={img} content={img} />;
		});
	};

	// prettier-ignore
	return (
		<Head>
			{title && <title>{title}</title>}
			{description && <meta name="description" content={description} />}
			{keywords && <meta name="keywords" content={keywords} />}
			{ogSiteName && <meta property="og:site_name" content={ogSiteName} />}
			{ogType && <meta property="og:type" content={ogType} />}
			{(ogTitle || title) && <meta property="og:title" content={ogTitle || title} />}
			{ogUrl && <meta property="og:url" content={ogUrl} />}
			{(ogDescription) && <meta property="og:description" content={ogDescription} />}
			{ogImage && renderOgImage(ogImage)}

			{twitterCard && <meta name="twitter:card" content={twitterCard} />}
			{twitterCard && twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
			{twitterCard && (twitterDescription) && <meta name="twitter:description" content={twitterDescription} />}
			{twitterCard && twitterImage && <meta name="twitter:image" content={twitterImage} />}

			{children}
		</Head>
	);
};

export default Meta;
