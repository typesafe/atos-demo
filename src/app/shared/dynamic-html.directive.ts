import { Directive, Input, ViewContainerRef, ComponentFactory, ElementRef, Injector, OnInit, ComponentFactoryResolver } from '@angular/core';
import { PortletRegistry } from "app/shared/portlet-decorator";


@Directive( {
    selector: '[portlet]'
} )
export class DynamicHtmlDirective implements OnInit {
    
    @Input() portlet: string;

    constructor(private _componentFactoryResolver: ComponentFactoryResolver,private injector : Injector,private viewContainerRef: ViewContainerRef) {

    }

    ngOnInit(): void {
        console.log("foooooooo");
        console.log(PortletRegistry[this.portlet]);

        var f = this._componentFactoryResolver.resolveComponentFactory(PortletRegistry[this.portlet]);
        console.log(f);
        
        this.viewContainerRef.createComponent(f);
        //this.injector.get(PortletRegistry[this.portlet])
    }
    
}