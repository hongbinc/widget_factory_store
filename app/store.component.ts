import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Widget } from "./widget";
import { WidgetDataService, Category, Size } from "./widget.dataservice";
import { Order } from "./order";
import { OrderDataService } from "./order.dataservice";

@Component({
    moduleId: module.id,
    selector: "widget-store",
    templateUrl: "store.component.html",
    styleUrls: ["store.component.css"]
})

export class StoreComponent implements OnInit {
    widgets: Array<Widget>;
    categories: Array<Category>;
    sizes: Array<any>;
    selectedCategory: Category = null;
    selectedSize: Size = null;
    currentOrderName: string = null;
    currentOrderId: number = null;

    constructor(
        private router: Router,
        private widgetDataService: WidgetDataService,
        private orderDataService: OrderDataService) {
    }

    ngOnInit(): void {
        this.widgetDataService.getCategories()
            .subscribe((categories) => {
                this.categories = categories;
            });

        this.widgetDataService.getSizes()
            .subscribe((sizes) => {
                this.sizes = sizes;
            });
    }

    goToOrdersPage(id) {
        this.router.navigate(["/orders", id]);
    }

    getOrder(id: string) {
        this.orderDataService.getOrder(id)
            .subscribe((data) => {
                this.currentOrderId = data.order_id;
                this.currentOrderName = data.name;
            });
    }

    createOrder(name: string) {
        this.orderDataService.createNewOrder(name)
            .subscribe((data) => {
                this.currentOrderName = name;
                this.currentOrderId = data.order_id;
            });
    }

    updateInventoryList(filterType: string, filterId: number) {
        if (filterType === "size") {
            this.selectedSize = this.getSelectedSizeFromId(filterId);

            this.widgetDataService.getWidgetsByCategoryAndSize(+this.selectedCategory.category_id, filterId)
                .subscribe((widgets) => {
                    this.widgets = widgets;
            });
        } else if (filterType === "color") {
            console.log("filter by color");
        }
    }

    updateSelectedCategory(categoryId: number) {
        this.selectedCategory = this.getSelectedCategoryFromId(categoryId);

        this.widgetDataService.getWidgetsByCategory(categoryId)
            .subscribe((widgets) => {
                this.widgets = widgets;
            });
    }

    private getSelectedCategoryFromId(categoryId: number) {
        let filteredCategoryArray = this.categories.filter(function( obj ) {
            return obj.category_id == categoryId;
        });
        return filteredCategoryArray[0];
    }

    private  getSelectedSizeFromId(sizeId: number) {
        let filteredSizeArray = this.sizes.filter(function( obj ) {
            return obj.size_id == sizeId;
        });
        return filteredSizeArray[0];
    }
}