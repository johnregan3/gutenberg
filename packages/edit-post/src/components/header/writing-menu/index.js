/**
 * WordPress dependencies
 */
import { MenuGroup } from '@wordpress/components';
import { __, _x } from '@wordpress/i18n';
import { useViewportMatch } from '@wordpress/compose';
import { displayShortcut } from '@wordpress/keycodes';
import { PreferenceToggleMenuItem } from '@wordpress/preferences';

function WritingMenu() {
	const isLargeViewport = useViewportMatch( 'medium' );
	if ( ! isLargeViewport ) {
		return null;
	}

	return (
		<MenuGroup label={ _x( 'View', 'noun' ) }>
			<PreferenceToggleMenuItem
				scope="core/edit-post"
				name="fixedToolbar"
				label={ __( 'Top toolbar' ) }
				info={ __(
					'Access all block and document tools in a single place'
				) }
				messageActivated={ __( 'Top toolbar activated' ) }
				messageDeactivated={ __( 'Top toolbar deactivated' ) }
			/>
			<PreferenceToggleMenuItem
				scope="core/edit-post"
				name="focusMode"
				label={ __( 'Spotlight mode' ) }
				info={ __( 'Focus on one block at a time' ) }
				messageActivated={ __( 'Spotlight mode activated' ) }
				messageDeactivated={ __( 'Spotlight mode deactivated' ) }
			/>
			<PreferenceToggleMenuItem
				scope="core/edit-post"
				name="fullscreenMode"
				label={ __( 'Fullscreen mode' ) }
				info={ __( 'Work without distraction' ) }
				messageActivated={ __( 'Fullscreen mode activated' ) }
				messageDeactivated={ __( 'Fullscreen mode deactivated' ) }
				shortcut={ displayShortcut.secondary( 'f' ) }
			/>
		</MenuGroup>
	);
}

export default WritingMenu;
