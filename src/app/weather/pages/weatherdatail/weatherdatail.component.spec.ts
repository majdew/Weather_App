import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdatailComponent } from './weatherdatail.component';

describe('WeatherdatailComponent', () => {
	let component: WeatherdatailComponent;
	let fixture: ComponentFixture<WeatherdatailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WeatherdatailComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WeatherdatailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
