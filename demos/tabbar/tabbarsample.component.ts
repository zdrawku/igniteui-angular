import { Component } from "@angular/core";

@Component({
    selector: "tabbar-sample",
    template: `
    <div id="phoneContainer" class="phone">
        <div id="mobileDiv" class="screen">
            <div>
                <div class="componentTitle">TabBar</div><br>
                <ig-tab-bar igRipple igRippleTarget="ul" alignment="bottom">
                    <ig-tab label="Tab 1" icon="library_music">                        
                        <span class="componentDesc">IgTabBar allow you to tabulate your content. It provides flexible ways to manage and navigate through your tabularized data. </span><br>
                        </ig-tab>
                    <ig-tab label="Tab 2" icon="video_library">
                        <p>You can style each tab with a material icon as demosntrated below.</ig-tab>
                    <ig-tab label="Tab 3" icon="library_books">
                        <p>Attaching to click events allow you to customize the way your TabBar is working.
                    </ig-tab>
                </ig-tab-bar>
            </div>
        </div>
    </div>
    `
})
export class TabBarSampleComponent { }