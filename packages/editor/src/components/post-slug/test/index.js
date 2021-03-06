/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import { PostSlug } from '../';

describe( 'PostSlug', () => {
	describe( '#render()', () => {
		it( 'should update internal slug', () => {
			const wrapper = shallow( <PostSlug postSlug="index" /> );

			wrapper.find( 'input' ).simulate( 'change', {
				target: {
					value: 'single',
				},
			} );

			expect( wrapper.state().editedSlug ).toEqual( 'single' );
		} );

		it( 'should update slug', () => {
			const onUpdateSlug = jest.fn();
			const wrapper = shallow(
				<PostSlug postSlug="index" onUpdateSlug={ onUpdateSlug } />
			);

			wrapper.find( 'input' ).simulate( 'blur', {
				target: {
					value: 'single',
				},
			} );

			expect( onUpdateSlug ).toHaveBeenCalledWith( 'single' );
		} );
	} );
} );
