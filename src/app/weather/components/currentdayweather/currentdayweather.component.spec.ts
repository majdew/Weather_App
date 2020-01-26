import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentdayweatherComponent } from './currentdayweather.component';

describe('CurrentdayweatherComponent', () => {
	let component: CurrentdayweatherComponent;
	let fixture: ComponentFixture<CurrentdayweatherComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CurrentdayweatherComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CurrentdayweatherComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
