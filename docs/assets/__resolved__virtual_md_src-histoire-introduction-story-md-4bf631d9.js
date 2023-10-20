const html = `<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h1>
<p>This Vue plugin was built to make frontend form handling and building easy. It takes a form (either Input or Action) as a prop, and will handle all building, masking, validations, requests and responses.</p>
<p>It's designed to be use with the <a href="https://packagist.org/packages/plustime-it/laravel-easyforms" target="_blank">Laravel EasyForms</a> Package for Laravel, helping to keep all form data in one place.</p>
<div class=" alert info"><div class="contents"><p>It's not required to use the parent package but you will need to conform to the data requirements when passing in / loading the forms.</p>
</div></div>
<h2 id="documentation-notes" tabindex="-1">Documentation Notes <a class="header-anchor" href="#documentation-notes" aria-hidden="true">#</a></h2>
<p>This documentation is only for this plugins version greater than <code>0.4.1-beta</code> and with the parent plugin <a href="https://packagist.org/packages/plustime-it/laravel-easyforms" target="_blank">Laravel EasyForms <code>0.2.0@beta</code></a> ( due to moving to Vue3 and Typescript ). You must also set your vuetify version to be greater than <code>Vuetify 3.3.7</code>.</p>
<p>Whilst versions lower than this still work and are pretty similar, there are some breaking changes and no Vue 2 documentation is provided. If you decide to head down that road. Good luck solider.</p>
<h2 id="design-framework" tabindex="-1">Design Framework <a class="header-anchor" href="#design-framework" aria-hidden="true">#</a></h2>
<p>This plugin utilizes <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a> as a framework for displaying inputs, alerts, buttons etc. It also follows the Grid layout for the most part.</p>
<h2 id="feature-list" tabindex="-1">Feature List <a class="header-anchor" href="#feature-list" aria-hidden="true">#</a></h2>
<div class="div data-table"><table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:center">Release Version</th>
<th style="text-align:center">Status</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Field Masking</td>
<td style="text-align:center">0.1.0</td>
<td style="text-align:center">💯</td>
</tr>
<tr>
<td style="text-align:left">Field Validations</td>
<td style="text-align:center">0.1.0</td>
<td style="text-align:center">💯</td>
</tr>
<tr>
<td style="text-align:left">Prefill Fields</td>
<td style="text-align:center">0.1.0</td>
<td style="text-align:center">💯</td>
</tr>
<tr>
<td style="text-align:left">Additional Request Data</td>
<td style="text-align:center">0.1.0</td>
<td style="text-align:center">💯</td>
</tr>
<tr>
<td style="text-align:left">Feat 1</td>
<td style="text-align:center">0.3.0</td>
<td style="text-align:center">❌</td>
</tr>
<tr>
<td style="text-align:left">Feat 2</td>
<td style="text-align:center">0.2090.0</td>
<td style="text-align:center">⁉️</td>
</tr>
</tbody>
</table>
</div>
<h3 id="legend" tabindex="-1">Legend <a class="header-anchor" href="#legend" aria-hidden="true">#</a></h3>
<div class="div data-table"><table>
<thead>
<tr>
<th style="text-align:left">Status</th>
<th style="text-align:center">Icon</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Completed</td>
<td style="text-align:center">💯</td>
</tr>
<tr>
<td style="text-align:left">Not Started</td>
<td style="text-align:center">❌</td>
</tr>
<tr>
<td style="text-align:left">It'll get done</td>
<td style="text-align:center">⁉️</td>
</tr>
</tbody>
</table>
</div>
`;
const frontmatter = { "group": "top", "icon": "carbon:bookmark", "title": "Intro" };
const relativePath = "src/histoire/Introduction.story.md";
export {
  frontmatter,
  html,
  relativePath
};
