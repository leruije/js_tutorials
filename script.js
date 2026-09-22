'use strict';

const tapasId = document.getElementById('tapasId');

let tapasLessonNumber = localStorage.getItem('tapasLessonNumber');
if (isnull(tapasLessonNumber)) {
	tapasLessonNumber = 1;
}

tapasId.textContent = `TapaScript (last lesson : ${tapasLessonNumber})`;
