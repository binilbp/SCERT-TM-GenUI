export interface Chapter {
	chapterNumber: string;
	title: string;
	minPage: string;
	maxPage: string;
}

interface Subject {
	name: string;
	chapters: Chapter[];
}

interface ClassItem {
	classNumber: string;
	subjects: Subject[];
}

type ClassDataType = ClassItem[];

export const classData: ClassDataType = [
	{
		classNumber: '2',
		subjects: [
			{
				name: 'Malalyalam',
				chapters: [
					{ chapterNumber: '6', title: 'പറക്കും വീട് ', minPage: '62', maxPage: '78' },
					{ chapterNumber: '7', title: 'മണിയൻ്റെ യാത്ര', minPage: '88', maxPage: '99' },
					{ chapterNumber: '8', title: 'പച്ചിലത്തുമ്പിലൂടെ', minPage: '100', maxPage: '109' },
					{ chapterNumber: '9', title: 'ആരോഗ്യവും സമ്പത്ത്', minPage: '110', maxPage: '121' }
				]
			},
			{
				name: 'English',
				chapters: [
					{ chapterNumber: '3', title: 'The Village Of Birds', minPage: '63', maxPage: '102' },
					{ chapterNumber: '4', title: 'Star In The Jar', minPage: '111', maxPage: '142' }
				]
			},
			{
				name: 'Maths',
				chapters: [
					{
						chapterNumber: '5',
						title: 'ഒന്നായ് ചേരാം നന്നായ് വളരാം',
						minPage: '68',
						maxPage: '86'
					},
					{ chapterNumber: '6', title: 'കാട്ടിലെ ഉത്സവം', minPage: '96', maxPage: '104' },
					{ chapterNumber: '7', title: 'ചങ്ങാതിക്കൂട്ടം', minPage: '112', maxPage: '129' }
				]
			}
		]
	}
];
