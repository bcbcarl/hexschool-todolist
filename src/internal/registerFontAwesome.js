import { library } from '@fortawesome/fontawesome-svg-core';

import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

import { faCalendarAlt as farCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt';
import { faCommentDots as farCommentDots } from '@fortawesome/free-regular-svg-icons/faCommentDots';
import { faEdit as farEdit } from '@fortawesome/free-regular-svg-icons/faEdit';
import { faFile as farFile } from '@fortawesome/free-regular-svg-icons/faFile';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons/faStar';

const registerFontAwesome = () => {
  library.add(
    faEdit,
    faPlus,
    faStar,
    farCalendarAlt,
    farCommentDots,
    farEdit,
    farFile,
    farStar
  );
};

export default registerFontAwesome;
