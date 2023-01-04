/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {

	return (
		<Splide
			hasTrack={false}
			data-splide={JSON.stringify({
				type:"loop",
				perPage:3,
				focus:1,
				gap:"var(--wp--custom--gap)",
				pagination:false,
				breakpoints: {
					480: {
						perPage : 1
					}
				}
			})}
		>
			<div className="splide__arrows">
				<button className="splide__arrow splide__arrow--prev">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.5 38.5"><path d="M0,19.2L19.2,0l2.2,2.3L4.4,19.2l17.1,17.1-2.3,2.2L0,19.2Z"/></svg>
				</button>
				<button className="splide__arrow splide__arrow--next">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.5 38.5"><path d="M2.2,38.5l-2.2-2.2L17.1,19.2,0,2.2,2.2,0,21.5,19.2,2.2,38.5Z"/></svg>
				</button>
			</div>
			<SplideTrack>
				<InnerBlocks.Content />
			</SplideTrack>
			<div className="splide__progress">
				<div className="splide__progress__bar" />
			</div>
		</Splide>
	);
}
