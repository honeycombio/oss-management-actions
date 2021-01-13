'use strict';

// Shared colour values
const colors = {
  aquasqueeze: 'DAE4DB',
	black: '000000',
	black20: 'ccc1b7',
	candy: 'ff7faa',
	claret: '990f3d',
	crimson: 'cc0000',
  jade: '00994d',
  laurel: '729776',
  lavender: 'd4c5f9',
  lemon: 'ffec1a',
  lemongrass: 'e9f4dc',
  oatmeal: 'fef6d7',
	oxford: '0f5499',
	oxfordWhite50: '87aacc',
	mandarinWhite40: 'ffcfad',
  mandarinWhite60: 'ffb885',
  mustard: 'fbca04',
  mint: 'bfe5bf',
  pink: 'ffb8c6',
	sky: 'cce6ff',
	slate: '262a33',
  surf: 'B7CAB9',
	teal: '0d7680',
	velvet: '593380',
	velvetPaper50: 'ac92b3',
	wasabi: '96cc28'
};

// Create and export the labels
module.exports = [
  {
    name: "status: good starter issue",
    color: colors.mint,
    description: "An issue that could be an on-ramp for a new contributor!",
    aliases: [
       "beginner-friendly",
       "beginner",
       "good-starter-issue",
       "starter-issue",
       "good first issue"
    ]
 },
 {
    name: "status: help wanted",
    color: colors.mint,
    description: "Seeking more eyes and hands.",
    aliases: [
       "help wanted"
    ]
 },
 {
    name: "status: wontfix",
    color: colors.black20,
    description: "Out of scope/alignment with the project, or issue is expected, intended behavior.",
    aliases: [
       "wontfix",
       "wont-fix",
       "invalid"
    ]
 },
 {
    name: "status: duplicate",
    color: colors.black20,
    aliases: [
       "duplicate"
    ]
 },
 {
    name: "status: blocked",
    color: colors.claret,
    aliases: [
       "blocked"
    ]
 },
 {
    name: "status: review needed",
    color: colors.mustard,
    description: "Changes need review."
 },
 {
    name: "status: revision needed",
    color: colors.pink,
    description: "Waiting for response to changes requested."
 },
 {
    name: "status: info needed",
    color: colors.mustard,
    description: "Further information is requested."
 },
 {
    name: "type: bug",
    color: colors.crimson,
    aliases: [
       "bug"
    ]
 },
 {
    name: "type: discussion",
    color: colors.lavender,
    description: "Requests for comments, discussions about possible enhancements.",
    aliases: [
       "discussion"
    ]
 },
 {
    name: "type: documentation",
    color: colors.oatmeal,
    aliases: [
       "documentation"
    ]
 },
 {
    name: "type: enhancement",
    color: colors.sky,
    aliases: [
       "enhancement",
       "feature"
    ]
 },
 {
    name: "type: maintenance",
    color: colors.oatmeal,
    description: "The necessary chores to keep the dust off.",
    aliases: [
       "chore",
       "maintenance",
       "refactor",
       "testing",
       "test"
    ]
 },
 {
    name: "type: question",
    color: colors.lavender,
    description: "Questions about usage.",
    aliases: [
       "question"
    ]
 },
 {
    name: "type: security",
    color: colors.crimson,
    description: "Security issues/fixes."
 },
 {
    name: "version: bump major",
    color: colors.laurel,
    description: "A PR that breaks backwards compatibility."
 },
 {
    name: "version: bump minor",
    color: colors.surf,
    description: "A PR that adds behavior, but is backwards-compatible."
 },
 {
    name: "version: bump patch",
    color: colors.aquasqueeze,
    description: "A PR with release-worthy changes and is backwards-compatible."
 },
 {
    name: "version: no bump",
    color: colors.oatmeal,
    description: "A PR with maintenance or doc changes that aren't included in a release."
 }
];
