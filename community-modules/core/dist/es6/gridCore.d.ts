// Type definitions for @ag-grid-community/core v22.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { LoggerFactory } from "./logger";
import { Component } from "./widgets/component";
import { SideBarDef } from "./entities/sideBar";
import { IToolPanel } from "./interfaces/iToolPanel";
export declare class GridCore extends Component {
    private gridOptions;
    private gridOptionsWrapper;
    private rowModel;
    private resizeObserverService;
    private columnController;
    private rowRenderer;
    private filterManager;
    private eventService;
    private eGridDiv;
    private $scope;
    private quickFilterOnScope;
    private popupService;
    private focusedCellController;
    loggerFactory: LoggerFactory;
    private columnApi;
    private gridApi;
    private clipboardService;
    private gridPanel;
    private sideBarComp;
    private eRootWrapperBody;
    private doingVirtualPaging;
    private logger;
    init(): void;
    private createTemplate;
    private onGridSizeChanged;
    private addRtlSupport;
    getRootGui(): HTMLElement;
    isSideBarVisible(): boolean;
    setSideBarVisible(show: boolean): void;
    setSideBarPosition(position: 'left' | 'right'): void;
    closeToolPanel(): void;
    getSideBar(): SideBarDef;
    getToolPanelInstance(key: string): IToolPanel | undefined;
    refreshSideBar(): void;
    setSideBar(def: SideBarDef | string | boolean): void;
    getOpenedToolPanel(): string;
    openToolPanel(key: string): void;
    isToolPanelShowing(): boolean;
    destroy(): void;
    ensureNodeVisible(comparator: any, position?: string): void;
}